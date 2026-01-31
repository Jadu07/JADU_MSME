import React from 'react';
import { X, Bell, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const NotificationPanel = ({ isOpen, onClose }) => {
    const notifications = [
        {
            id: 1,
            type: 'success',
            title: 'Order Delivered',
            message: 'Order #12345 has been successfully delivered to the customer.',
            time: '2 mins ago',
            read: false
        },
        {
            id: 2,
            type: 'warning',
            title: 'Low Stock Alert',
            message: 'Product "Brake Pads" is running low on stock (Only 5 left).',
            time: '1 hour ago',
            read: false
        },
        {
            id: 3,
            type: 'info',
            title: 'New Feature Available',
            message: 'Check out the new AI Assistant feature in your dashboard!',
            time: '3 hours ago',
            read: true
        },
        {
            id: 4,
            type: 'success',
            title: 'Payment Received',
            message: 'Payment of ₹1,200 received from John Doe.',
            time: '5 hours ago',
            read: true
        }
    ];

    if (!isOpen) return null;

    return (
        <div className="absolute top-16 right-4 w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 transform origin-top-right transition-all duration-200 animate-in fade-in slide-in-from-top-4">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-2xl">
                <div className="flex items-center gap-2">
                    <Bell size={18} className="text-[#033543]" />
                    <h3 className="font-bold text-slate-800">Notifications</h3>
                    <span className="bg-[#033543] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">2 New</span>
                </div>
                <button
                    onClick={onClose}
                    className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-400 transition-colors"
                >
                    <X size={16} />
                </button>
            </div>

            {/* List */}
            <div className="max-h-[400px] overflow-y-auto">
                {notifications.map((notif) => (
                    <div
                        key={notif.id}
                        className={`p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4 ${!notif.read ? 'bg-blue-50/30' : ''
                            }`}
                    >
                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${notif.type === 'success' ? 'bg-emerald-100 text-emerald-600' :
                                notif.type === 'warning' ? 'bg-amber-100 text-amber-600' :
                                    'bg-blue-100 text-blue-600'
                            }`}>
                            {notif.type === 'success' && <CheckCircle size={14} />}
                            {notif.type === 'warning' && <AlertTriangle size={14} />}
                            {notif.type === 'info' && <Info size={14} />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`text-sm font-semibold ${!notif.read ? 'text-slate-900' : 'text-slate-600'}`}>
                                    {notif.title}
                                </h4>
                                <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">{notif.time}</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                {notif.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-slate-100 text-center bg-slate-50/50 rounded-b-2xl">
                <button className="text-xs font-semibold text-[#033543] hover:text-[#054b5e] hover:underline">
                    Mark all as read
                </button>
            </div>
        </div>
    );
};

export default NotificationPanel;
