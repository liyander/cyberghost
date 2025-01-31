// src/KaliTerminal.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const KaliTerminal = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const navigate = useNavigate(); 

  const bootMessages = [
    '[ 2.194785] sd 0:0:0:0: [sda] Assuming drive cache: write through',
    '[ 2.195284] sd 0:0:0:0: [sda] Assuming drive cache: write through',
    '[ 2.196163] sd 0:0:0:0: [sda] Assuming drive cache: write through',
    'INIT: version 2.88 booting',
    '[info] Using makefile-style concurrent boot in runlevel S.',
    '[ ok ] Starting the hot plug events dispatcher: udevd.',
    '[....] Synthesizing the initial hotplug events...[ 2.700609] piix_smbus 0000:00:07.3: Host SMBus controller not enabled!',
    'done.',
    '[ ok ] Waiting for /dev to be fully populated..[ 3.061484] Error: Driver \'pc spkr\' is already registered, aborting...',
    'done.',
    '[ ok ] Setting preliminary keymap...done.',
    '[ ok ] Activating swap...done.',
    '[....] Checking root file system...fsck from util-linux 2.20.1 /dev/sda1: clean, 38190/1256640 files, 341993/5016832 blocks',
    'done.',
    '[info] Loading kernel module loop.',
    '[ ok ] Cleaning up temporary files... /tmp.',
    '[ ok ] Activating lvm and md swap...done.',
    '[....] Checking file systems...fsck from util-linux 2.20.1',
    'done.',
    '[....] Mounting local filesystems...done.',
    '[ ok ] Activating swapfile swap...done.',
    '[ ok ] Cleaning up temporary files....',
    '[ ok ] Setting kernel variables ...done.',
    '[ ok ] Configuring network interfaces...done.',
    '[ ok ] Starting rpcbind daemon....',
    '[ ok ] Starting NFS common utilities: statd idmapd.',
    '[ ok ] Cleaning up temporary files....done.',
    '[info] Setting console screen modes.',
    '[info] Skipping font and keymap setup (handled by console-setup).',
    '[....] Setting up console font and keymap...done.',
    'INIT: Entering runlevel: 2',
    '[info] Using makefile-style concurrent boot in runlevel 2.',
    '[ ok ] Starting NFS common utilities: statd ldmapd.',
    '[ ok ] Starting rpcbind daemon...[....] Already running..',
    '[ ok ] Starting enhanced syslogd: rsyslogd.',
    '[ ok ] Starting deferred execution scheduler: atd.',
    '[ ok ] Starting ACPI services....',
    '[ ok ] Starting periodic command scheduler: cron',
    '[ ok ] Hacking into goOgle',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageIndex < bootMessages.length) {
        setDisplayedMessages(prev => [...prev, bootMessages[messageIndex]]);
        setMessageIndex(prev => prev + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          navigate('/home');
        }, 1000); 
      }
    }, 50);

    return () => clearInterval(timer);
  }, [messageIndex, navigate, bootMessages]); // Now it's safe to include bootMessages
};
  const getMessageColor = (message) => {
    if (message.includes('[ ok ]')) return '#00ff00';
    if (message.includes('[info]')) return '#00ffff';
    return '#ffffff';
  };

  return (
    <div style={{ 
      backgroundColor: '#000000',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            {displayedMessages.map((message, index) => (
              <div 
                key={index}
                style={{
                  color: getMessageColor(message),
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  textAlign: 'left',
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.2',
                  margin: '0',
                  padding: '0'
                }}
              >
                {message}
              </div>
            ))}
            <span 
              style={{
                display: 'inline-block',
                width: '8px',
                height: '15px',
                backgroundColor: '#ffffff',
                animation: 'blink 1s step-end infinite'
              }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default KaliTerminal;
