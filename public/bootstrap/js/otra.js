window.onload = () => {
    var lista = document.getElementById("S_E")
    lista.onchange = () => {
        if (lista.value == "Deshabilitar")
            location.href = "/"
        else
            window.location = "/S_E:" + lista.value;
    }
}

function on() {
    var listaAdd = document.getElementById("inputGroupSelect01")
    window.location = "/agregar:nums=" + listaAdd.value;
}

function onsub(h) {
    var acuerdo_id = $('#acuerdo_id' + h),
        nro_acuerdo = $('#nro_acuerdo' + h),
        fecha = $('#fecha' + h),
        submit = $('#submit' + h)
        // hr = window.location.href,
        // todo = 'acuerdo_id=' + acuerdo_id + '&nro_acuerdo' + nro_acuerdo + '&fecha' + fecha
    console.log("0")
    window.stop();
}

function myfun(h_d, h, e) {
    var select = 0
    if (h_d == "false") {
        $(".disable").removeAttr('disabled')
        select = 1
    }
    if (h_d == "true_defect") {
        $(".disable").attr('disabled')
        select = 0
    }
    if (h_d == "false_v") {
        $(".disable").removeAttr('disabled')
        $(".disable").attr('type', 'radio')
        select = 2
    }
    document.querySelector(".selectE").options.item(select).setAttribute('selected', false)
    if (h == "search") {
        $('.selectE').attr('hidden')
        $('.Ag').removeAttr('hidden')
    } else if (h == "search_ag") {
        $('.selectE').attr('hidden')
    } else {
        $('.selectE').removeAttr('hidden')
        $('.Ag').attr('hidden')
    }
    // document.getElementById("#inputGroupSelect01").options.item(e).setAttribute('selected', false)
}