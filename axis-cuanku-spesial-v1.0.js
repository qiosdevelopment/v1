function _0x227a(_0x577825,_0x210d89){const _0x2510a7=_0x2510();return _0x227a=function(_0x227a01,_0x3ecc9c){_0x227a01=_0x227a01-0x169;let _0x37cbad=_0x2510a7[_0x227a01];return _0x37cbad;},_0x227a(_0x577825,_0x210d89);}const _0xaa8b2d=_0x227a;(function(_0x3d0645,_0x45e4f6){const _0x19081e=_0x227a,_0x265265=_0x3d0645();while(!![]){try{const _0x2835b3=-parseInt(_0x19081e(0x17d))/0x1+parseInt(_0x19081e(0x1a3))/0x2+parseInt(_0x19081e(0x177))/0x3*(parseInt(_0x19081e(0x194))/0x4)+-parseInt(_0x19081e(0x1b6))/0x5*(-parseInt(_0x19081e(0x1b7))/0x6)+-parseInt(_0x19081e(0x18c))/0x7+-parseInt(_0x19081e(0x1b4))/0x8+parseInt(_0x19081e(0x19d))/0x9;if(_0x2835b3===_0x45e4f6)break;else _0x265265['push'](_0x265265['shift']());}catch(_0x3f4b3e){_0x265265['push'](_0x265265['shift']());}}}(_0x2510,0xbd54b));const getApi=_0x43456e=>{const _0x4d5ae4=_0x227a;$(_0x4d5ae4(0x187))[_0x4d5ae4(0x182)](),$(_0x4d5ae4(0x16f))[_0x4d5ae4(0x1a2)](),isLoading=!![];const _0x1df37e=setTimeout(()=>{const _0x450e8e=_0x4d5ae4;isLoading&&Toast[_0x450e8e(0x1ae)](_0x450e8e(0x17a),0xbb8,_0x450e8e(0x1bd));},0x1388);let _0x38a065={'customer_no':_0x43456e,'apikey':setProduct[_0x4d5ae4(0x1a4)]};$[_0x4d5ae4(0x1b2)]({'url':_0x4d5ae4(0x19c)+setProduct[_0x4d5ae4(0x1b0)]+'/axis-cuanku-spesial/produk','data':_0x38a065,'success':_0x3132f6=>{const _0x466faf=_0x4d5ae4;clearTimeout(_0x1df37e),_0x3132f6[_0x466faf(0x1bb)][_0x466faf(0x1bf)]===0xc8&&_0x3132f6[_0x466faf(0x1a1)]?(allProducts=_0x3132f6[_0x466faf(0x1a1)],looping(allProducts),$(_0x466faf(0x1aa))[_0x466faf(0x183)]()):Toast[_0x466faf(0x1ae)](_0x466faf(0x16c),0xbb8,_0x466faf(0x1b8)),$(_0x466faf(0x187))['hide'](),isLoading=![];},'error':()=>{const _0x38fa79=_0x4d5ae4;clearTimeout(_0x1df37e),$(_0x38fa79(0x187))[_0x38fa79(0x183)](),$('.product-notfound')[_0x38fa79(0x182)](),isLoading=![];}});},selectProduct=_0x2003a4=>{const _0x46fa50=_0x227a;selectedProduct=currentProducts[_0x2003a4],Sheet[_0x46fa50(0x1ae)](popupDetail(),styleForSheet),$('.backdrop')[_0x46fa50(0x184)](()=>{history['back']();}),$(_0x46fa50(0x181))['text']($(_0x46fa50(0x1b1))[_0x46fa50(0x189)]()),$('#nama-produk')['html'](selectedProduct[_0x46fa50(0x175)]),$(_0x46fa50(0x19f))['html'](selectedProduct[_0x46fa50(0x18f)]),$(_0x46fa50(0x1a6))[_0x46fa50(0x1a0)](selectedProduct[_0x46fa50(0x1ba)]||_0x46fa50(0x1bc)),$(_0x46fa50(0x1ad))[_0x46fa50(0x16e)](selectedProduct[_0x46fa50(0x1ac)]);},orderProduct=()=>{const _0x1f49f5=_0x227a;if(!selectedProduct){Toast[_0x1f49f5(0x1ae)](_0x1f49f5(0x19b),0xbb8,'info-warning');return;}Toast['open'](_0x1f49f5(0x185),0xbb8,_0x1f49f5(0x1bd));let _0x583e3f=$(_0x1f49f5(0x1b1))['val'](),_0x11606e={'customer_no':_0x583e3f,'kode':selectedProduct[_0x1f49f5(0x16a)],'apikey':setProduct[_0x1f49f5(0x1a4)]};$['ajax']({'url':'https://'+setProduct[_0x1f49f5(0x1b0)]+'/axis-cuanku-spesial/order','data':_0x11606e,'success':_0x152d73=>{const _0x2e05e8=_0x1f49f5;if(_0x152d73&&_0x152d73[_0x2e05e8(0x1bb)]&&_0x152d73[_0x2e05e8(0x1bb)][_0x2e05e8(0x1bf)]===0xc8&&_0x152d73[_0x2e05e8(0x1b5)]&&_0x152d73['data'][_0x2e05e8(0x199)]){let _0x59aa10=_0x152d73[_0x2e05e8(0x1b5)][_0x2e05e8(0x199)];window[_0x2e05e8(0x17f)][_0x2e05e8(0x173)]=_0x2e05e8(0x19c)+setProduct[_0x2e05e8(0x190)]+_0x2e05e8(0x169)+setProduct[_0x2e05e8(0x171)]+_0x2e05e8(0x17c)+encodeURIComponent(_0x59aa10);}else{const _0x3fbbab=_0x152d73&&_0x152d73['message']?_0x152d73[_0x2e05e8(0x178)]:_0x2e05e8(0x1a9);Toast[_0x2e05e8(0x1ae)](_0x3fbbab,0xbb8,_0x2e05e8(0x1b8));}},'error':()=>{const _0x23c027=_0x1f49f5;Toast[_0x23c027(0x1ae)](_0x23c027(0x19a),0xbb8,_0x23c027(0x1b8));}});},tryClickCategory=()=>{const _0x34c84c=_0x227a;let _0xbc370e=$(_0x34c84c(0x1b1))[_0x34c84c(0x189)]()[_0x34c84c(0x17b)]();if(_0xbc370e[_0x34c84c(0x180)]<0x9){Toast['open']('Nomor\x20Tujuan\x20minimal\x20harus\x20lebih\x20dari\x208\x20digit\x20!!',0xbb8,'info-danger');return;}let _0x2c40ac=validPrefixes[_0x34c84c(0x17e)](_0x43cd21=>_0xbc370e['startsWith'](_0x43cd21));if(!_0x2c40ac){Toast['open'](_0x34c84c(0x195),0xbb8,_0x34c84c(0x1b8));return;}isLoading?Toast[_0x34c84c(0x1ae)]('Tunggu\x20hingga\x20produk\x20selesai\x20dimuat',0xbb8,_0x34c84c(0x1bd)):getApi(_0xbc370e);},popupDetail=()=>_0xaa8b2d(0x1a7)+setProduct[_0xaa8b2d(0x1ab)]+_0xaa8b2d(0x198),filterProducts=()=>{const _0x39aec5=_0xaa8b2d;let _0x40f9dd=$(_0x39aec5(0x192))['val']()[_0x39aec5(0x186)]();if(_0x40f9dd){let _0x91679f=allProducts['filter'](_0x40bbb5=>_0x40bbb5[_0x39aec5(0x175)]['toLowerCase']()['includes'](_0x40f9dd));$(_0x39aec5(0x16f))['empty'](),looping(_0x91679f);}else $(_0x39aec5(0x16f))[_0x39aec5(0x1a2)](),looping(allProducts);};function _0x2510(){const _0x2e2ad6=['Server\x20sedang\x20gangguan.','Silakan\x20pilih\x20produk\x20terlebih\x20dahulu.','https://','4075506xqboaq','#EEE','#masa-aktif','html','produk','empty','2276420GmozBg','apikey','#cek-produk-button','#deskripsi','\x0a\x20\x20\x20\x20<div\x20id=\x22content-produk\x22\x20class=\x22content-produk\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22rincian\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>Rincian</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa-solid\x20fa-caret-down\x22\x20onclick=\x22history.back()\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22menu-detail\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22info-detail\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Nomor\x20Tujuan</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22info-detail-r\x22\x20id=\x22nomor-tujuan\x22>loading</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22info-detail\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Produk</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22info-detail-r\x22\x20id=\x22nama-produk\x22>loading</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22deskirpsi-detail\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22deskripsi\x22>loading</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22button-pembelian\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22harga-total\x22>loading</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22lanjut\x22\x20onclick=\x22orderProduct()\x22\x20style=\x22background:\x20','.lanjut','Gagal\x20membuat\x20kode\x20pembayaran.\x20Paket\x20atau\x20promo\x20yang\x20ingin\x20Anda\x20beli\x20mungkin\x20sudah\x20kadaluarsa,\x20atau\x20terjadi\x20kesalahan\x20di\x20sistem\x20kami.','.button-list','color','harga','#harga-total','open','value','baseApi','#user-id','ajax','grid','1327944rwYiXB','data','1340945ORSLtR','6vWgfPj','info-danger','/ambil_kontak','deskripsi','result','Deskripsi\x20tidak\x20tersedia.','info-warning','body','status','/produk/','kode','ready','Paket\x20tidak\x20tersedia\x20untuk\x20nomor\x20yang\x20dituju.','</div>','text','#list-produk','replace','id_produk','#toggle-button','href','addClass','nama','css','1059537xNXxqt','message','undefined','Sedang\x20melakukan\x20pengecekan,\x20harap\x20tunggu\x20sebentar...','trim','?catatan=','888012vValCi','some','location','length','#nomor-tujuan','show','hide','click','Sedang\x20membuat\x20kode\x20bayar,\x20harap\x20tunggu\x20sebentar...','toLowerCase','.loader','startsWith','val','.product-notfound','removeClass','2680356zRSgjY','change','slice','masa_aktif','olshop','hasClass','#search','list','4pqLwWk','Bukan\x20nomor\x20Tri.\x20Harap\x20periksa\x20kembali.','input','background',';\x22>LANJUT</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>','kode_bayar'];_0x2510=function(){return _0x2e2ad6;};return _0x2510();}if(typeof Toast===_0xaa8b2d(0x179)){const Toast={'open':(_0x181e62,_0x4bc9e2,_0x458d75)=>{const _0x29d758=_0xaa8b2d;let _0x17756a=$('<div\x20class=\x22toast\x20'+_0x458d75+'\x22>'+_0x181e62+_0x29d758(0x16d));$(_0x29d758(0x1be))['append'](_0x17756a),setTimeout(()=>{_0x17756a['remove']();},_0x4bc9e2);}};}$(document)[_0xaa8b2d(0x16b)](()=>{const _0x443640=_0xaa8b2d;$(_0x443640(0x187))[_0x443640(0x183)](),$(_0x443640(0x1b1))['on'](_0x443640(0x196),function(){const _0x1ff593=_0x443640;this['value']=formatPhoneNumber(this[_0x1ff593(0x1af)]),validateInput(),clearProductList(),$(_0x1ff593(0x1aa))['show']();}),$(_0x443640(0x1b1))['on'](_0x443640(0x18d),function(){const _0x45b53b=_0x443640;this[_0x45b53b(0x1af)]=formatPhoneNumber(this['value']),validateInput(),clearProductList(),$(_0x45b53b(0x1aa))[_0x45b53b(0x182)]();}),$('#take-contact')[_0x443640(0x184)](()=>{const _0x163bd3=_0x443640;window['location'][_0x163bd3(0x173)]=_0x163bd3(0x19c)+setProduct[_0x163bd3(0x190)]+_0x163bd3(0x1b9);}),displayCategoryName(),$(_0x443640(0x192))['on'](_0x443640(0x196),filterProducts),$(_0x443640(0x172))[_0x443640(0x184)](()=>{const _0x1f7393=_0x443640,_0x51cdf6=$('#list-produk');_0x51cdf6[_0x1f7393(0x191)]('list')?_0x51cdf6[_0x1f7393(0x18b)](_0x1f7393(0x193))[_0x1f7393(0x174)](_0x1f7393(0x1b3)):_0x51cdf6['removeClass']('grid')['addClass'](_0x1f7393(0x193));}),$(_0x443640(0x1a5))[_0x443640(0x184)](()=>{tryClickCategory();});});function clearProductList(){const _0x1de52c=_0xaa8b2d;$(_0x1de52c(0x16f))[_0x1de52c(0x1a2)](),$(_0x1de52c(0x18a))[_0x1de52c(0x183)]();}function formatPhoneNumber(_0x274a43){const _0x44ca75=_0xaa8b2d;return _0x274a43=_0x274a43[_0x44ca75(0x170)](/[^0-9]/g,''),_0x274a43[_0x44ca75(0x188)]('62')&&(_0x274a43='0'+_0x274a43[_0x44ca75(0x18e)](0x2)),_0x274a43;}function validateInput(){const _0x1763fb=_0xaa8b2d,_0x38cc66=$(_0x1763fb(0x1b1))[_0x1763fb(0x189)]();_0x38cc66&&_0x38cc66[_0x1763fb(0x180)]>=0x9?$(_0x1763fb(0x1a8))[_0x1763fb(0x176)](_0x1763fb(0x197),setProduct[_0x1763fb(0x1ab)]):$(_0x1763fb(0x1a8))['css'](_0x1763fb(0x197),_0x1763fb(0x19e));}