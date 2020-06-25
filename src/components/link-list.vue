<template>
	<ul class="mdui-list">
		<link-item v-for="(link, index) in links" :key="index" v-bind="link"></link-item>
	</ul>
</template>
<script>
import LinkItem from "./link-item" 
export default {
	components: {
		LinkItem
	},
	props: {
		links:{ 
			required: true,
			validator: function() { return true; }
		}
	}
}
</script>
