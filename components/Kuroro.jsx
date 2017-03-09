// ไฟล์ kuroro.jsx
 
// โหลด React ที่เป็นโมดูลแบบ CommonJS มาใช้งาน
var React = require('react');
 
// ใช้ React สร้าง component
var Kuroro = React.createClass({
    render: function() {
        return (
            <p>Kuroro</p>
        );
    }
});
 
// export component นี้ ออกเป็น module
module.exports = Kuroro;