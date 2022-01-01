# vuepress-plugin-tagging


## clientDynamicModules

### `@dynamic/vuepress-plugin-tagging/tag-list`

```
[
  {
    "name": "<tag name>",
    "pages": [
      {
        "key": "v-xxxxxxxx",
        "title": "<page title>",
        "path": "<page path>"
      },
      ...
    ]
  },
  ...
]
```


## Predefined global components

```html
<PluginTaggingTagListType1 />
```

```html
<PluginTaggingTagListType2 />
```


## Configuration example

Suppose you created markdown (`tags.md`) using global component.

```js
module.exports = {
  themeConfig: {
    nav: [
      {text: 'Tags', link: '/tags.html'},
    ],
  },
  plugins: [
    'tagging',
  ],
};
```
