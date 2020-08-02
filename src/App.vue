<template>
	<transition name="fade" appear>
	<div>
	<header class="header">
		<div class="mdui-center">
			<img class="favicon" src="/favicon.png"/>
			<h2>Woshiluo</h2>
		</div>
	</header>
	<main>
		<div class="mdui-card mdui-container card" id="app">
			<header class="card-header">
				<div class="mdui-row-xs-2 tab-buttons" :class="'mdui-row-sm-'+( lists.length > 6? 6: lists.length )">
					<block-button v-for="list in lists" :key="list.id" :text="list.title" :disable="current_tab_check(list.id)" @click="change_tab(list.id)"></block-button>
				</div>
				<div class="mdui-typo">
					<hr/>
				</div>
			</header>
			<div class="mdui-card-content card-content">
				<transition name="fade" mode="out-in" appear>
				<keep-alive>
					<component :is="current_tab_component" :key="current_tab" v-bind="current_tab_links"></component>
				</keep-alive>
				</transition>
				<div class="mdui-typo footer">
					<hr/>
					本站已运行 {{ day_number }} 天 {{ hour_number }} 时 {{ minute_number }} 分 {{ second_number }} 秒
				</div>
			</div>
		</div>
	</main>
	</div>
	</transition>
</template>

<script>
import LinkList from "./components/link-list.vue"
import BlockButton from "./components/block-button.vue"
import AboutMe from "./components/about-me.vue"

import FriendLinks from "./data/friend-links.json"
export default {
	name: 'App',
	components: {
		LinkList,
		BlockButton,
		AboutMe
	},
	data: function() {
		return {
			current_tab: 0,
			day_number: 0,
			hour_number: 0,
			minute_number: 0,
			second_number: 0,
			lists: [
				{ 
					id: 0, title: "About me", component: "about-me", 
				},
				{ 
					id: 1, title: "Index", component: "link-list",
					data: { links: [ 
						{ "url": "https://blog.woshiluo.com", "title": "Woshiluo's Notebook", description: "「Jump up HIGH!!」", image_src: "book" },
						{ "title": "Woshiluo's Diary", description: "风雨背后总有彩虹", image_src: "photo" },
						{ "url": "https://api.woshiluo.site/status/", "title": "Status", description: "Gu gu guing.", image_src: "pie_chart" } 
					] }
				},
				{ 
					id: 2, title: "Find me", component: "link-list", 
					data: { links: [ 
						{ "url": "mailto:woshiluo.luo[at]outlook.com", "description": "woshiluo.luo[at]outlook.com", "title": "E-mail" },
						{ "url": "/woshiluo.asc", "description": "A2AA 7A24 7192 8C32 4407  7AA5 42AC 62C6 1460 1460", "title": "GnuPG" },
						{ "url": "https://github.com/woshiluo", "description": "@woshiluo", "title": "Github" },
						{ "url": "https://loj.ac/user/7852", "description": "@Woshiluo", "title": "LibreOJ" },
						{ "url": "https://codeforces.com/profile/woshiluo", "description": "@woshiluo", "title": "Codeforces" },
						{ "url": "https://space.bilibili.com/99800931", "description": "@woshiluo-Bzhan", "title": "Bilibili" },
					] } 
				},
				{ 
					id: 3, title: "Friend Links", component: "link-list", 
					data: { links: FriendLinks }
				}]
		}
	},
	created: function() {
		setInterval( this.createtime, 500 );
	},
	methods: {
		change_tab(id) {
			this.current_tab = id;
		},
		current_tab_check(id) {
			return this.current_tab === id;
		},
		createtime() {
			var now = new Date();
			var grt = new Date("1/7/2017 20:00:00");
			var days, hours, minutes, seconds;
			now.setTime(now.getTime() + 250);
			days = (now - grt) / 1000 / 60 / 60 / 24;
			this.day_number = Math.floor(days);
			hours = (now - grt) / 1000 / 60 / 60 - (24 * this.day_number);
			this.hour_number = Math.floor(hours);
			if (String(this.hour_number).length == 1) {
				this.hour_number = "0" + this.hour_number;
			}
			minutes = (now - grt) / 1000 / 60 - (24 * 60 * this.day_number) - (60 * this.hour_number);
			this.minute_number = Math.floor(minutes);
			if (String(this.minute_number).length == 1) {
				this.minute_number = "0" + this.minute_number;
			}
			seconds = (now - grt) / 1000 - (24 * 60 * 60 * this.day_number) - (60 * 60 * this.hour_number) - (60 * this.minute_number);
			this.second_number = Math.round(seconds);
			if (String(this.second_number).length == 1) {
				this.second_number = "0" + this.second_number;
			}
		}
	},
	computed: {
		current_tab_links: function() {
			return this.lists[this.current_tab].data;
		},
		current_tab_component: function() {
			return this.lists[this.current_tab].component;
		}
	}
}
</script>

<style scoped>
.header {
	padding: 15px;
	width: 100%;
	top: 2vh;
}
.favicon {
	height: 10vh;
	max-height: 100%;
}

.card {
	display: flex;
	flex-direction: column;
	max-height: 60vh;
}
.card-content {
	overflow: auto;
}
.card-header {
	padding: 5px;
}

.tab-buttons > div {
	margin-bottom: 5px;
}

.footer {
	padding: 5px;
	text-align: center;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .2s ease;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
.mdui-center {
	text-align:center;
}
</style>
