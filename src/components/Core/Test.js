export default function Test() {


    function importAll(r) {
        let images = {};
        r.keys().map(item => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('./Memberimg', false, '/\.png/'));

    return (
        <img src={images['0.png']} />
    );
}