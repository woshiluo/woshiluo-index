<template>
	<li class="mdui-list-item mdui-ripple">
		<div v-if="use_image" class="mdui-list-item-avatar">
			<img :src="image_src"/>
		</div>
		<i v-else-if="image_src.length" class="mdui-list-item-avatar mdui-icon mdui-color-theme mdui-text-color-theme-text material-icons">{{ image_src }}</i>
		<div v-else></div>
		<div class="mdui-list-item-content">
			<div class="mdui-list-item-title mdui-list-item-one-line">
				{{ title }}
			</div>
			<div class="mdui-list-item-text mdui-list-item-one-line" v-if="description.length">
				{{ description }}
			</div>
		</div>
		<a :href="url" v-if="url.length" ><i class="mdui-list-item-icon mdui-icon material-icons">send</i></a>
	</li>
</template>

<script>
export default {
	props: {
		"use_image": {
			type: Boolean,
			default: false
		},
		"image_src": {
			type: String,
			default: ""
		},
		"title": {
			type: String,
			default: ""
		},
		"description": {
			type: String,
			default: ""
		},
		"url": {
			type: String,
			default: ""
		}
	}
}
</script>
