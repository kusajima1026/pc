//2022.04.10 05:00 KUSAJIMA Ren

function sc(x){return document.getElementById(x)}

function checkAll(){
    var bud = sc('selectBud').value;
    var siz = sc('selectSiz').value;
    var cpu = sc('selectCpu').value;
    var gpu = sc('selectGpu').value;
    var ram = sc('selectRam').value;
    var rom = sc('selectRom').value;

    var s1 = 0;

    if(bud!==''){sc('selectBud').style.border='2px solid blue';s1++;}else{sc('selectBud').style.border='1px solid black';}
    if(siz!==''){sc('selectSiz').style.border='2px solid blue';s1++;}else{sc('selectSiz').style.border='1px solid black';}
    if(cpu!==''){sc('selectCpu').style.border='2px solid blue';s1++;}else{sc('selectCpu').style.border='1px solid black';}
    if(gpu!==''){sc('selectGpu').style.border='2px solid blue';s1++;}else{sc('selectGpu').style.border='1px solid black';}
    if(ram!==''){sc('selectRam').style.border='2px solid blue';s1++;}else{sc('selectRam').style.border='1px solid black';}
    if(rom!==''){sc('selectRom').style.border='2px solid blue';s1++;}else{sc('selectRom').style.border='1px solid black';}

    if(s1==6){
        s1=0
        sc('output').innerHTML = `
        <table>
            <tbody>
                <tr><td>CPU</td><td><a href="" id="parts_name0">Athlon 3000G</a></td></tr>
                <tr><td>GPU</td><td><a href="" id="parts_name1">ASUS R7 250</a></td></tr>
                <tr><td>マザーボード</td><td><a href="" id="parts_name2">ASRock A320 Micro</a></td></tr>
                <tr><td>RAM</td><td><a href="" id="parts_name3">TEAM 8GBx2枚</a></td></tr>
                <tr><td>ROM</td><td><a href="" id="parts_name4">SP 512GB</a></td></tr>
                <tr><td>PCケース</td><td><a href="" id="parts_name5">Thermaltake MicroATX</a></td></tr>
                <tr><td>電源ユニット</td><td><a href="" id="parts_name6">玄人志向 400W</a></td></tr>
                <tr><td>CPUクーラー</td><td><a href="" id="parts_name7">純正(CPU付属)</a></td></tr>
            </tbody>
        </table>`

        sc('total_price').innerHTML = calc(bud,siz,cpu,gpu,ram,rom)+'円';
        sc('favicon').href = 'favicon_g.ico';
    }else{
        sc('favicon').href = 'favicon_r.ico';
    }
}

function dev(){
    sc('selectBud').value = '8~9万円';
    sc('selectSiz').value = 'Micro-ATX';
    sc('selectCpu').value = 'AMD';
    sc('selectGpu').value = 'AMD Radeon'
    sc('selectRam').value = '16GB';
    sc('selectRom').value = '512GB';

    checkAll()
    return true;
}