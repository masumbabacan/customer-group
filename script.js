(function($){
    app = {
        func:{
            groupIdQuery : () => {
                if(customerGrupId === ""){
                    Swal.fire('üyeliksiz giriş!','hoşgeldin dostum!','success');
                }else if(customerGrupId === "1"){
                    Swal.fire('normal üyelik!','hoşgeldin dostum!','success');
                }else if(customerGrupId === "2"){
                    Swal.fire('belirlenen üyelik!','hoşgeldin dostum!','success');
                }
            },
            userEveryEntry : () => {
                sessionStorage.getItem('popupTrigger') == null ? sessionStorage.setItem('popupTrigger','0') : "";
                sessionStorage.getItem("userGroupId") == null ? sessionStorage.setItem('userGroupId',customerGrupId) : "";
                if(sessionStorage.getItem("userGroupId") !== customerGrupId){
                     app.func.groupIdQuery(); 
                     sessionStorage.setItem('userGroupId',customerGrupId); 
                }
                if (sessionStorage.getItem('popupTrigger') == 0) {
                     app.func.groupIdQuery();
                     sessionStorage.setItem('popupTrigger','1');
                }
            },
            onceDay: () => {
                let now = new Date();
                localStorage.getItem("userGroupId") == null ? localStorage.setItem('userGroupId',customerGrupId) : ""; 
                if(localStorage.getItem("userGroupId") !== customerGrupId){
                    app.func.groupIdQuery();
                    localStorage.setItem('userGroupId',customerGrupId);
                }
                if (localStorage.getItem("signDate") == null) {
                    app.func.groupIdQuery();
                    localStorage.setItem("signDate",now.getMinutes());
                }else if(localStorage.getItem("signDate") != now.getMinutes()){
                    app.func.groupIdQuery();
                    localStorage.setItem("signDate", now.getMinutes());
                }
            },
        }
    }
    $(document).ready(() => {
        repeatType == 0 ? app.func.onceDay() : "";
        repeatType == 1 ? app.func.userEveryEntry() : "";
    });
})(jQuery);