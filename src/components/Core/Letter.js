import classes from "./sass/css/Letter.module.css";
import anh1 from "./anh1.jpg";
import anh2 from "./anh2.jpg";

export default function Letter() {

    const today = new Date();
    const summarizing = new Date("May, 25, 2019")

    var DateDiff = {

        inDays: function (d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();

            return parseInt((t2 - t1) / (24 * 3600 * 1000));
        }
    }

    return (
        <>
            <img className={classes.anh1} src={anh1} />
            <h2>We 're A5 K58</h2>
            <h1>1 chiếc website để nhớ về những ngày xưa cũ</h1>
            <h4>-From An to Tin K58 with love-</h4>
            <h1></h1>
            <h2>Thanh xuân là cơn mưa rào cho dù có bị cảm lạnh nhưng ai</h2>
            <h3>cũng muốn được tắm thêm 1 lần nữa ❤❤❤</h3>
            <h4>-Lớp trưởng-</h4>
            <h1></h1>
            <img className={classes.anh2} src={anh2} />
            <h2>#Day {DateDiff.inDays(summarizing, today)}</h2>

            <h6></h6>
        </>
    );
}