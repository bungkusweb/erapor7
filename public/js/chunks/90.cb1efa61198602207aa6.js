(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"0SwP":function(a,i,e){"use strict";e.r(i);var t=e("IF94"),s=e("YZfj"),r=e("AeMN"),n=e("X9p1"),l={components:{BCard:t.a,BCardBody:s.a,BSpinner:r.a,BAlert:n.a},data:function(){return{isBusy:!0,tersedia:!1,os:""}},created:function(){this.loadPostData()},methods:{loadPostData:function(){var a=this;this.isBusy=!0,this.$http.get("/setting/check-update").then((function(i){a.isBusy=!1;var e=i.data;a.tersedia=e.tersedia,a.os=e.os,console.log(e)}))}}},v=e("KHd+"),d=Object(v.a)(l,(function(){var a=this,i=a.$createElement,e=a._self._c||i;return e("b-card",{attrs:{"no-body":""}},[e("b-card-body",[a.isBusy?e("div",{staticClass:"text-center text-danger my-2"},[e("b-spinner",{staticClass:"align-middle"}),a._v(" "),e("strong",[a._v("Loading...")])],1):e("div",[a.tersedia?[e("b-alert",{attrs:{variant:"success",show:""}},[e("div",{staticClass:"alert-body"},[e("p",[a._v("Pembaharuan tersedia!")])])]),a._v(" "),"WIN"===a.os?[e("ol",{staticClass:"ps-1",attrs:{type:"a"}},[e("li",[e("strong",[a._v("Manual")]),a._v(" "),e("ul",{staticStyle:{"padding-left":"10px"}},[e("li",[a._v("Buka Command Prompt (CMD) Run as Administrator")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("cd C:\\eRaporSMK\\dataweb")]),a._v(" [enter]")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("git stash")]),a._v(" [enter]")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("git clean -df")]),a._v(" [enter]")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("git pull origin main")]),a._v(" [enter]. Tunggu sampai proses update file dari github selesai")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("composer update")]),a._v(" [enter]")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("php artisan erapor:update")]),a._v(". Tunggu sampai proses update versi aplikasi selesai.")]),a._v(" "),e("li",[a._v("Pastikan di akhir informasi di Command Prompt, versi aplikasi sudah berubah")]),a._v(" "),e("li",[a._v("Cek kembali aplikasi e-Rapor SMK, jika ada yang gagal silahkan laporkan ke Tim Helpdesk")])])]),a._v(" "),e("br"),a._v(" "),e("li",[e("strong",[a._v("Menggunakan file .bat")]),a._v(" "),e("ul",{staticStyle:{"padding-left":"10px"}},[e("li",[a._v("Silahkan download file "),e("strong",[a._v("updater e-Rapor SMK V7.0.0.bat")]),a._v(" "),e("a",{attrs:{href:"https://drive.google.com/drive/folders/1gjKuWR0-17xa8m5v2WNvqRvmnMgqDk8a?usp=drive_link",target:"_blank"}},[a._v("disini")]),a._v(".")]),a._v(" "),e("li",[a._v("Buka file "),e("strong",[a._v("updater e-Rapor SMK V7.0.0.bat")]),a._v(" dengan cara klik kanan dan pilih Run as Administartor.")]),a._v(" "),e("li",[a._v("Tunggu sampai proses update versi aplikasi selesai.")])])])])]:[e("ul",{staticStyle:{"padding-left":"10px"}},[e("li",[a._v("Buka aplikasi Putty, jika belum ada, silahkan unduh "),e("a",{attrs:{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank"}},[a._v("disini")]),a._v(" kemudian install")]),a._v(" "),e("li",[a._v("Login ke SSH menggunakan username & password yang dimiliki")]),a._v(" "),e("li",[a._v("Masuk ke root direktori aplikasi e-Rapor SMK di install.(Contoh "),e("code",[a._v("cd /var/www/html/erapor")]),a._v(" [enter])")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("git stash")]),a._v(" [enter]")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("git clean -df")]),a._v(" [enter]")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("git pull origin main")]),a._v(" [enter]. Tunggu sampai proses update file dari github selesai.")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("composer update")]),a._v(" [enter]")]),a._v(" "),e("li",[a._v("Ketik "),e("code",[a._v("php artisan erapor:update")]),a._v(". Tunggu sampai proses update versi aplikasi selesai.")]),a._v(" "),e("li",[a._v("Pastikan di akhir informasi di SSH, versi aplikasi sudah berubah")]),a._v(" "),e("li",[a._v("Cek kembali aplikasi e-Rapor SMK, jika ada yang gagal silahkan laporkan ke Tim Helpdesk")])])]]:[e("b-alert",{attrs:{variant:"danger",show:""}},[e("div",{staticClass:"alert-body"},[e("p",[a._v("Pembaharuan belum tersedia!")])])])]],2)])],1)}),[],!1,null,null,null);i.default=d.exports}}]);