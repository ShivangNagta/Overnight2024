// components/CodeConverter.jsx
import React, { useState } from 'react';
import { HfInference } from '@huggingface/inference';

const CodeConverter = () => {
  const [sourceCode, setSourceCode] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('python');
  const [convertedCode, setConvertedCode] = useState('');

  const handleConvert = async () => {
    const hf = new HfInference('YOUR_HUGGINGFACE_API_TOKEN'); // Replace with your Hugging Face API token

    // Assuming 'codegen/codegen-350M-multi' is a suitable model for this purpose
    const model = 'HuggingFaceH4/codegen-350M-multi';

    try {
      const response = await hf.textGeneration({
        model,
        inputs: `${sourceCode}\nConvert this code to ${targetLanguage}:`,
      });

      setConvertedCode(response.generated_text);
    } catch (error) {
      console.error("Error converting code:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-lg text-center">
      <h2 className="text-lg font-semibold mb-4">Code Converter</h2>
      <textarea
        value={sourceCode}
        onChange={(e) => setSourceCode(e.target.value)}
        placeholder="Enter your source code here..."
        rows="6"
        className="border rounded w-full p-2 mb-4"
      />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
        className="border rounded w-full p-2 mb-4"
      >
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
        <option value="csharp">C#</option>
      </select>
      <button
        onClick={handleConvert}
        className="bg-gray-900 text-white py-2 px-4 rounded mb-2 w-full"
      >
        Convert Code
      </button>
      {convertedCode && (
        <div className="mt-4">
          <h3 className="font-semibold">Converted Code:</h3>
          <pre className="bg-gray-100 p-2 rounded">{convertedCode}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeConverter;
