<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
export default {
  name: "UserView",
  data( data ) {
    console.log( "In UserView ..." );
    console.log( data );
    return {
      user: data
    }
  },
}
</script>
