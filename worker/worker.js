let detector = null;
import { BarcodeDetector } from "barcode-detector/ponyfill";

globalThis.onmessage = async (e) => {
    const { frame } = e.data;

    try {
        if (!detector) {
            detector = new BarcodeDetector({ formats: ["code_39"] });
        }

        const barcodes = await detector.detect(frame);
        frame.close();

        if (barcodes.length > 0) {
            self.postMessage({
                found: true,
                rawValue: barcodes[0].rawValue
            });
        } else {
            self.postMessage({ found: false });
        }

    } catch (err) {
        self.postMessage({ error: err.message });
    }

    frame.close();
};