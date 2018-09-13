<template>
	<div class="error-page">
		<h1 class="title">500</h1>
		<p class="desc">系统内部错误 Ｓòrγy</p>
		<div>
			<Button @click="goHome" size="large" type="text">返回首页</Button>
			<Button @click="backPage" size="large" type="text">返回上一页</Button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Error500',
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
