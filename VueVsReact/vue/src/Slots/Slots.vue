///slot Vue.js way Vue.js has slot for inserting child elements.

<Content>
  <p>Hello world</p>
</Content>

///Content component be like:

<template>
  <article>
    <h1>This is a title.</h1>
    <slot></slot>
  </article>
</template>

///When you have more that one blocks to insert, you can name each of those.

<MyComponent>
  <template #header>
    <MyHeader />
  </template>
  <template #content>
    <MyContent />
  </template>
  <template #footer>
    <MyFooter />
  </template>
</MyComponent>
