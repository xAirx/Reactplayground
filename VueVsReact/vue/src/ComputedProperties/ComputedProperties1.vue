Without computed properties:

<!-- Without computed ReversedMessage.vue -->

<template>
  <p>{{ message.split("").reverse().join("") }}</p>
</template>

<script>
export default {
  props: ["message"],
};
</script>

export default function ReversedMessage({ message }) { return
<p>{message.split('').reverse().join('')}</p>
; }

<!-- With computed ReversedMessage.vue -->

<template>
  <p>{{ reversedMessage }}</p>
</template>

<script>
export default {
  props: ["message"],

  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>

export default function ReversedMessage({ message }) { const reversedMessage =
message.split('').reverse().join(''); return
<p>{reversedMessage}</p>
; }
