<template>
	<div class="mdui-col">
		<button v-if="disable" class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>{{ text }}</button>
		<button v-else class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" @click="$emit('click')">{{ text }}</button>
	</div>
</template>

<script>
export default {
	props: {
		"text": {
			type: String,
			default: ""
		},
		"disable": {
			type: Boolean,
			default: false
		}
	}
}
</script>
