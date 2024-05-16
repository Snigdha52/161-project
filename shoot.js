AFRAME.registerComponent("bullets", {
    init: function () {
        this.shootbullet()
    },
    shootbullet: function () {
        window.addEventListener("keydown", (e) => {
if(e.key==="z"){
    var bullet=document.createElement("a-entity")
    bullet.setAttribute("geometry",{primitive:"sphere",radius:0.1})
    bullet.setAttribute("material","color","black")
    var camera=document.querySelector("#camera")
    var pos=camera.getAttribute("position")
    bullet.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
var cam=document.querySelector("#camera").object3D
var dir=new THREE.Vector3()
cam.getWorldDirection(dir)
bullet.setAttribute("velocity",dir.multiplyScalar(-10))
bullet.setAttribute("dynamic-body",{shape:"sphere",mass:"0"})

    var scene=document.querySelector("#scene")
    scene.appendChild(bullet)
}
        })
    }


})