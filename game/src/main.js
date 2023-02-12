

var canvas = document.getElementById('renderCanvas');
// Load the 3D engine
var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true}, false);

var createScene = function(){
    var scene = new BABYLON.Scene(engine);
    scene.ambientColor = new BABYLON.Color3(1,1,1);
    
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", 
    {diameter: 2, segments: 32}, scene);
    sphere.position.x = 2;
    sphere.position.z = -3;
    
    var sphereMaterial = new BABYLON.StandardMaterial("sphereMaterial", scene);
    sphereMaterial.ambientColor = new BABYLON.Color3(0.3,0.3,0.3);
    sphereMaterial.diffuseColor = new BABYLON.Color3(0,0.5,1);
    sphere.material = sphereMaterial; 
    
    
    




    
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -15), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);
    
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 1;
    light.specular = BABYLON.Color3.Black()
    
    var ground = BABYLON.MeshBuilder.CreateGround("ground1", { width: 5, height: 5, subdivisions: 2, updatable: false }, scene);
    const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
    groundMaterial.diffuseColor = BABYLON.Color3.FromHexString("#78a3b0");
    ground.material = groundMaterial;






    // Append glTF model to scene.
    BABYLON.SceneLoader.ImportMeshAsync(null, "./public/", "8_animation_0.gltf", scene
                                       ).then((result) => {
                                        const [root] = result.meshes;
                                        //console.log({result});
                                        result.animationGroups.forEach((ag) => {
                                            if (ag.name === "idle") {
                                                ag.start(true);
                                            }
                                            else {
                                                ag.stop();
                                            }
                                        });
                                        //root.rotate(BABYLON.Vector3.Up(), Math.PI*2)
                                        root.rotate(BABYLON.Vector3.Up(), Math.PI)
                                        root.scaling.setAll(1);
                                        root.position.x = 0
                                       });
















    // Return the created scene
    return scene;
}



var scene = createScene();
engine.runRenderLoop(function(){
    scene.render();
});


// show inspector
// scene.debugLayer.show();

window.addEventListener('resize', function(){
    engine.resize();
});