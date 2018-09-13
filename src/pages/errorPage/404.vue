<template>
	<div class="error-page">
		<h1 class="title">404</h1>
		<p class="desc">找不到页面了 :-(</p>
		<div>
			<Button @click="goHome" size="large" type="text">返回首页</Button>
			<Button @click="backPage" size="large" type="text">返回上一页</Button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Error404',
		methods: {
			backPage () {
				this.$router.go(-1);
			},
			goHome () {
				this.$router.replace({
					name: 'home'
				});
			}
		}
	}
</script>
