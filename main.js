window.addEventListener("load", init);

function init(){
    // サイズを指定
    const width = 960;
    const height = 540;
    let rot = 0;

    // シーン作成
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width/height);

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas"),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 球体
    const geometry = new THREE.SphereGeometry(300, 30, 30);

    //マテリアル　材質
    const material = new THREE.MeshStandardMaterial({
        map: new THREE.TExtureLoader().load("texture/earthmap1k.jpeg")
    });

    //メッシュ
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    //光源
    const directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 1.9);
    directionalLight.position.set(1, 1, 1);
    scene.add(earth);

    //ポイント光源
    const pointLight = new THREE.PointLight( 0xffffff, 2, 1000);
    scene.add(pointLight);
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
    scene.add(pointLightHelper);
}