'use client';

import { useState, useEffect } from 'react';
import { 
  Phone, 
  PhoneOff, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Pause, 
  Play, 
  UserCheck, 
  MessageSquare, 
  FileText, 
  Calendar, 
  Timer,
  Activity,
  Heart
} from 'lucide-react';

interface CallInterfaceProps {
  call: {
    id: string;
    customerName?: string;
    customerPhone: string;
    agentName: string;
    status: 'ringing' | 'active' | 'hold' | 'ended';
    startTime: Date;
    category: string;
  };
  onEndCall: () => void;
  onTransferCall: () => void;
  onScheduleFollowUp: () => void;
}

export default function CallInterface({ call, onEndCall, onTransferCall, onScheduleFollowUp }: CallInterfaceProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [isRecording, setIsRecording] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const [notes, setNotes] = useState('');
  const [transcript, setTranscript] = useState([
    { speaker: 'AI', text: 'Guten Tag! Hier ist Sophie von InsureAI Pro. Wie kann ich Ihnen helfen?', timestamp: new Date() },
    { speaker: 'Kunde', text: 'Hallo, ich interessiere mich für eine Lebensversicherung.', timestamp: new Date() },
    { speaker: 'AI', text: 'Das ist wunderbar! Gerne berate ich Sie dazu. Darf ich fragen, wie alt Sie sind?', timestamp: new Date() }
  ]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (call.status === 'active') {
      interval = setInterval(() => {
        setCallDuration(Math.floor((Date.now() - call.startTime.getTime()) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [call.status, call.startTime]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {call.customerName || call.customerPhone}
            </h3>
            <p className="text-sm text-gray-500">
              {call.agentName} • {call.category}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
            call.status === 'active' ? 'bg-green-100 text-green-800' :
            call.status === 'ringing' ? 'bg-yellow-100 text-yellow-800' :
            call.status === 'hold' ? 'bg-orange-100 text-orange-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {call.status === 'active' && <Activity className="w-4 h-4" />}
            <span className="capitalize">{call.status}</span>
          </div>
          
          {call.status === 'active' && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Timer className="w-4 h-4" />
              <span className="font-mono">{formatDuration(callDuration)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Call Controls */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`p-3 rounded-full border-2 transition-colors ${
            isMuted 
              ? 'bg-red-50 border-red-200 text-red-600' 
              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>
        
        <button
          onClick={() => setIsSpeakerOn(!isSpeakerOn)}
          className={`p-3 rounded-full border-2 transition-colors ${
            isSpeakerOn 
              ? 'bg-blue-50 border-blue-200 text-blue-600' 
              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {isSpeakerOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
        
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`p-3 rounded-full border-2 transition-colors ${
            isRecording 
              ? 'bg-red-50 border-red-200 text-red-600' 
              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {isRecording ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        
        <button
          onClick={onTransferCall}
          className="p-3 rounded-full border-2 border-orange-200 text-orange-600 hover:bg-orange-50 transition-colors"
        >
          <UserCheck className="w-5 h-5" />
        </button>
        
        <button
          onClick={onEndCall}
          className="p-4 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          <PhoneOff className="w-6 h-6" />
        </button>
      </div>

      {/* Live Transcript & Notes */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Live Transcript */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900 flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            Live Transkript
          </h4>
          <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
            <div className="space-y-3">
              {transcript.map((entry, index) => (
                <div key={index} className="flex space-x-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    entry.speaker === 'AI' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {entry.speaker}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{entry.text}</p>
                    <p className="text-xs text-gray-500">
                      {entry.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900 flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Notizen
          </h4>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notizen zum Gespräch..."
            className="w-full h-64 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onScheduleFollowUp}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Termin vereinbaren</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
            <FileText className="w-4 h-4" />
            <span>Angebot erstellen</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
            <Heart className="w-4 h-4" />
            <span>Als VIP markieren</span>
          </button>
        </div>
      </div>

      {/* Voice Analysis */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Voice Analytics</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">😊 Positiv</div>
            <div className="text-xs text-gray-500">Stimmung</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">73%</div>
            <div className="text-xs text-gray-500">Sprechanteil Kunde</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-purple-600">2</div>
            <div className="text-xs text-gray-500">Unterbrechungen</div>
          </div>
        </div>
      </div>
    </div>
  );
} 