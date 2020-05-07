<template>
	<div>
		<span>请输入新的密码</span>
		<input v-model="changePassword" type="password"></input>
		<button @click="updatePassword">保存</button>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				changePassword:""
			}
		},
		methods:{
			updatePassword(){
				console.log(this.changePassword)
				console.log(this.$store.state.a.isLogin)
				//^\d{m,n}$
				//验证格式
				let RegExp = /^\d{6,13}$/
				if(RegExp.test(this.changePassword)==true){
					this.axios.post('http://localhost:7001/changePW',{changeword:this.changePassword,myusername:this.$store.state.a.userName}).then((response)=>{
						console.log(response.config.data.changeword)//打印修改后的数据
						alert("修改成功")
						
					})
				}else{
					alert("请输入6~13位数字！！")
				}
			}
		}
	}
</script>

<style scoped>
</style>
