(function($){
    let app = {
        func:{
            groupIdQuery : () => {
                if(customerGrupId == customerTypeOne){
                    app.func.fancyboxPopup(customerTypeOneUrl,'image',1000,500,20);
                }else if(customerGrupId == customerTypeTwo){
                    app.func.fancyboxPopup(customerTypeTwoUrl,'image',1000,500,20);
                }else if(customerGrupId == customerTypeTheree){
                    app.func.fancyboxPopup(customerTypeThereeUrl,'image',1000,500,20);
                }
            },
            fancyboxPopup : (url,type,width,height,margin) => {
                $.fancybox.open(
                    [{src  : url, type : type, }],
                    {width : width, height : height, margin : margin,}
                );
            },
            fancyBoxButtonRemove : () => {
                $(".fancybox-button--fullscreen, .fancybox-button--share").remove();
            },
            userEveryEntry : () => {
                if(sessionStorage.getItem('popupTrigger') == null){
                    sessionStorage.setItem('popupTrigger','0');
                }
                if(sessionStorage.getItem("userGroupId") == null){
                    sessionStorage.setItem('userGroupId',customerGrupId);
                } 
                if(sessionStorage.getItem("userGroupId") !== customerGrupId){
                     app.func.groupIdQuery(); 
                     sessionStorage.setItem('userGroupId',customerGrupId); 
                }
                if (sessionStorage.getItem('popupTrigger') == "0") {
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
        if(repeatType == 0) app.func.onceDay();
        if(repeatType == 1) app.func.userEveryEntry();
        app.func.fancyBoxButtonRemove();
    });
})(jQuery);