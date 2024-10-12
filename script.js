function hitung() {
    const tWr = document.getElementById("tWr").value;
    const wrReq = document.getElementById("wrReq").value;
    const tMatch = parseInt(document.getElementById("tMatch").value);

    let tWin = tMatch * (tWr / 100);
    let tLose = tMatch * ((100 - tWr) / 100);
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let total = seratusPersen - tMatch;
    let totalnocommas = Math.ceil(total);

    document.getElementById("wacingcong").innerHTML = totalnocommas;
}

function hapus() {
    document.getElementById("tWr").value = '';
    document.getElementById("wrReq").value = '';
    document.getElementById("tMatch").value = '';
}
