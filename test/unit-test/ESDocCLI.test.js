import esdocsCLI from '../../src/esdocsCLI';
import process from 'process';
import fs from 'fs';
import assert from 'assert';
import path from 'path';

describe('test esdocsCLI:', ()=>{
  describe('command option', ()=>{
    const orig = console.log;
    it('can show help', ()=>{
      const argv = [null, null];
      const cli = new esdocsCLI(argv);
      console.log = function(){};
      cli._showHelp();
      console.log = orig;
    });

    it('can show version', ()=>{
      const argv = [null, null];
      const cli = new esdocsCLI(argv);
      console.log = function(){};
      cli._showVersion();
      console.log = orig;
    });
  });

  describe('find configuration', ()=>{
    it('finds -c', ()=>{
      const cli = new esdocsCLI([null, null, '-c', 'esdocs.json']);
      assert.equal(cli._findConfigFilePath(), 'esdocs.json');
    });

    it('finds .esdocs.json', ()=>{
      process.chdir('./test/');
      fs.writeFileSync('.esdocs.json', 'dummy');
      const cli = new esdocsCLI([null, null]);
      assert.equal(cli._findConfigFilePath(), path.resolve('.esdocs.json'));
      fs.unlinkSync('.esdocs.json');
      process.chdir('../');
    });

    it('finds .esdocs.js', ()=>{
      process.chdir('./test/');
      fs.writeFileSync('.esdocs.js', 'dummy');
      const cli = new esdocsCLI([null, null]);
      assert.equal(cli._findConfigFilePath(), path.resolve('.esdocs.js'));
      fs.unlinkSync('.esdocs.js');
      process.chdir('../');
    });
  });
});
