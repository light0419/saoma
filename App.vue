<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	/* button{
		border: none;
		background: none;
		outline: none;
	} */
	uni-button:after{
		border: none;
		background: none;
		outline: none;
	}
	/* 清除浮 动*/
	*{
		box-sizing: border-box;
	}
	.fix { *zoom:1; }
	.fix:after { content:" "; display:block; height:0; clear:both; visibility:hidden; font-size:0;}
	.fl{float:left;}
	.fr{float:right;}
	
	.dn { display: none; }
	.di { display: inline; }
	.db { display: block; }
	.dib { display: inline-block; } /* if the element is block level(eg. div, li), using 'inline-any' instead */
	
	/* overflow */
	.ovh { overflow: hidden; }
	
	/* position */
	.rel { position: relative; }
	.abs { position: absolute; }
	/* 块状元素水平居中 */
	.auto { margin-left: auto; margin-right: auto; }
	/* text-align */
	.tc { text-align: center; }
	.tr { text-align: right; }
	.tl { text-align: left; }
	.tj { text-align: justify; }
	.vmid{
		vertical-align: middle;
		position: relative;
		top:-1px;
		display: inline-block;
	}
</style>
