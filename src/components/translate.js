import React, { useEffect, useState } from "react";
import axios from "axios";

const doTranslation = async (input, languageCode) => {
  const apiKey = process.env.REACT_APP_YANDEX_DICTIONARY_API_KEY;
  if (!apiKey) {
    console.error('Yandex Dictionary API key is not set');
    return "";
  }

  let y = 'https://dictionary.yandex.net/api/v1/dicservice.json';
  let url = `${y}/lookup?key=${apiKey}&lang=ru-${languageCode}&text=${input}`;

  try {
    const { data } = await axios.post(url);
    return data.def[0].tr[0].text;
  } catch (err) {
    return "";
  }
};

export default ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) return;
    doTranslation(text, language).then(setTranslated);
  }, [text, language]);

  return (
    <div>
      <label className="label">Output</label>
      <h1 className="title">{translated}</h1>
    </div>
  );
};
