---
title: Home
editLink: true
---

# {{ $frontmatter.title }}

- 이미지(BASE URL ./public)

![An image](./test.gif)

- github style tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

- 임티

:tada: :100:

- 목차

[[toc]]

- 블록

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

- custom name

::: danger STOP
Danger zone, do not proceed
:::


- code block + highlight

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html{1-2,4}
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
https://prismjs.com/#languages-list
