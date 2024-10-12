import React, { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { DragHandleDots2Icon } from '@radix-ui/react-icons';
import { GoogleGenerativeAI } from "@google/generative-ai";

const SingleFileProject = () => {
  const [sourceLanguage, setSourceLanguage] = useState('javascript'); // Default source language
  const [targetLanguage, setTargetLanguage] = useState(''); // Target language for conversion
  const [code, setCode] = useState('// Write your JavaScript code here');
  const [convertedCode, setConvertedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Create an instance of GoogleGenerativeAI with your API key
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleCompileCode = () => {
    alert(`Compiling ${sourceLanguage} code...`);
    // Implement your compilation logic here
  };

  const handleConvertCode = async () => {
    if (targetLanguage) {
      setIsLoading(true);
      try {
        const prompt = `Convert the following code from ${sourceLanguage} to ${targetLanguage}:\n${code}`;
        const result = await model.generateContent(prompt);
        const generatedCode = result.response.text();
        setConvertedCode(generatedCode || 'No code generated.');
      } catch (error) {
        console.error("Error converting code:", error);
        setConvertedCode(`Error converting code: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please select a target language for conversion.");
    }
  };

  return (
    <div className='h-screen m-0 overflow-hidden'>
      <PanelGroup
        autoSaveId='example'
        direction='horizontal'
        className='mt-0 min-h-60 rounded-lg border'
      >
        <Panel defaultSize={75}>
          <div className='flex flex-col h-full p-4'>
            <div className="mb-2 flex space-x-4">
              <div className="flex items-center">
                <label className="mr-2">Source Language:</label>
                <select
                  value={sourceLanguage}
                  onChange={(e) => setSourceLanguage(e.target.value)}
                  className='p-2 border rounded'
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  {/* Add more languages as needed */}
                </select>
              </div>

              <button
                onClick={handleCompileCode}
                className='p-2 bg-gray-900 text-white rounded'
              >
                Compile Code
              </button>

              <div className="flex items-center">
                <label className="mr-2">Target Language:</label>
                <select
                  value={targetLanguage}
                  onChange={(e) => setTargetLanguage(e.target.value)}
                  className='p-2 border rounded'
                >
                  <option value="">Select language</option>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  {/* Add more languages as needed */}
                </select>
              </div>

              <button
                onClick={handleConvertCode}
                className='p-2 bg-gray-900 text-white rounded'
                disabled={isLoading}
              >
                {isLoading ? 'Converting...' : 'Convert Code'}
              </button>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className='flex-grow p-2 border rounded'
              style={{ resize: 'none' }}
              rows={10}
              placeholder='Write your code here...'
            />

            {convertedCode && (
              <div className="mt-4 p-2 border rounded bg-gray-200">
                <h3 className="font-semibold">Converted Code:</h3>
                <pre>{convertedCode}</pre>
              </div>
            )}
          </div>
        </Panel>

        <PanelResizeHandle className='flex w-px items-center justify-center bg-white'>
          <div className='z-10 flex h-6 w-4 items-center justify-center rounded-sm border bg-zinc-200'>
            <DragHandleDots2Icon className='h-4 w-4' />
          </div>
        </PanelResizeHandle>

        <Panel defaultSize={25}>
          <div className='flex h-full items-center justify-center bg-gray-100 p-6'>
            <span className='font-semibold'>Console</span>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default SingleFileProject;
