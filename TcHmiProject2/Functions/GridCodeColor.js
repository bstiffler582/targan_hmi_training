// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject2;
        (function (TcHmiProject2) {
            function GridCodeColor(rowData, index, rowNum) {
                if (rowData.nCode) {
                    return [`code-${rowData.nCode}`];
                }
            }
            TcHmiProject2.GridCodeColor = GridCodeColor;
        })(TcHmiProject2 = Functions.TcHmiProject2 || (Functions.TcHmiProject2 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('GridCodeColor', 'TcHmi.Functions.TcHmiProject2', TcHmi.Functions.TcHmiProject2.GridCodeColor);
