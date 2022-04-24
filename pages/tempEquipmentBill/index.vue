<template>
	<view class="content">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchTxt:'',
			}
		},
		onLoad() {

		},
		methods: {
			scancodestorage: function() {
				uni.navigateTo({
					url:"../sweepCodeStorage/sweepCodeStorage"
				})
			},
			search(){
				console.log(this.searchTxt)
			}
		}
	}
</script>

<style lang="less">
	
</style>
