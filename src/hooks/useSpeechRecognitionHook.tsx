import { useEffect, useState } from 'react';

let recognition: any = null
if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.cotinuous = true;
    recognition.lang = "ru" || "en-US";
    // recognition.lang = "ru";
}


const useSpeechRecognition = () => {

    const [text, setText] = useState('');
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if (!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) =>
            // console.log('событие onresult:::', event);
            //    для вывода текста
            // if(event) {
            setText(event.results[0][0].transcript);
        // }
        recognition.stop();
        setIsListening(false);
    }, [])

    const startListening = () => {
        setText('');
        setIsListening(true);
        recognition.start();
    }

    const stopListening = () => {
        setIsListening(false);
        recognition.stop();
    }
    return {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition,
    }

}

export default useSpeechRecognition;