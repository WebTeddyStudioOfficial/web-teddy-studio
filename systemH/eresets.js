(function(){
    let k = {}, i = [], s = window.setInterval;
    window.setInterval = function(f, d){
        let id = s(f, d);
        i.push(id);
        return id;
    };

    function c(){
        for(let x = 0; x < i.length; x++){
            clearInterval(i[x]);
        }
        i = [];
    }

    function h(a){
        c();
        if(a === 'clearStorage'){
            localStorage.clear();
        }
        location.reload();
    }

    function o(a){
        openApp('command');
    }

    document.addEventListener('keydown', (e) => {
        k[e.key.toLowerCase()] = true;
        if(k['control'] && k['b']){
            h('clearStorage');
        } else if(k['control'] && k['m']){
            h('reloadOnly');
        } else if(k['control'] && k['q']){
            o('command');
        }
    });

    document.addEventListener('keyup', (e) => {
        k[e.key.toLowerCase()] = false;
    });
})();