# Migration to V1.0.0
esdocs v1.0 adopts plugin architecture. So, almost all features are provided as plugins.<br/>
Please change your config to load plugins.

## Using esdocs-standard-plugin
Main features of esdocs were carved out to [esdocs-standard-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-standard-plugin)

Please use the plugin with the following config.

`npm install esdocs-standard-plugin`

```json
{
  "source": "./src",
  "destination": "./docs",
  "plugins": [{"name": "esdocs-standard-plugin"}]
}
```

The full config description is [here](./config.html#full-config).<br/>
Especially [integration test codes](./config.html#integrate-test-codes-config) and [integration manual](./config.html#integrate-manual-config) were big changed.

## Using Other Plugins
The following features were carved out to each plugins. If you want to use the features, please use the plugins.

- `config.includeSource` => [esdocs-exclude-source-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-exclude-source-plugin)
- `config.styles` => [esdocs-inject-style-plugin](https://github.com/esdocs/esdocs-plugins/blob/master/esdocs-inject-style-plugin)
- `config.scripts` => [esdocs-inject-script-plugin](https://github.com/esdocs/esdocs-plugins/blob/master/esdocs-inject-script-plugin)
- `config.experimentalProposal` => [esdocs-ecmascript-proposal-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-ecmascript-proposal-plugin)
- Parsing JSX => [esdocs-jsx-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-jsx-plugin)
