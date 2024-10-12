import React from 'react'
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels'



const Editor = () => {
    return (
        <div>
            <PanelGroup direction="horizontal">
                <Panel defaultSize={30} minSize={20}>
                    left
                </Panel>
                <PanelResizeHandle />
                <Panel minSize={30}>
                    middle
                </Panel>
                <PanelResizeHandle />
                <Panel defaultSize={30} minSize={20}>
                    right
                </Panel>
            </PanelGroup>
        </div>
    )
}

export default Editor
