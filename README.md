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
        "regularPath": "<page regular path>"
      },
      ...
    ]
  },
  ...
]
```

### `@dynamic/vuepress-plugin-tagging/tag-list-i18n`

```
{
  "<locale path>": [
    {
      "name": "<tag name>",
      "pages": [
        {
          "key": "v-xxxxxxxx",
          "title": "<page title>",
          "path": "<page path>"
          "regularPath": "<page regular path>"
        },
        ...
      ]
    },
    ...
  ],
  ...
}
```


## Predefined global components

### all

```html
<PluginTaggingTagListAllType1/>
```

```html
<PluginTaggingTagListAllType2/>
```

### i18n (locale path specific)

```html
<PluginTaggingTagListI18nType1/>
```

```html
<PluginTaggingTagListI18nType2/>
```

### debug

```html
<PluginTaggingTagListDebug/>
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
