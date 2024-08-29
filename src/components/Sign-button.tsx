'use client';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useRef, useState, useEffect, useId } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { FaArrowLeft, FaSignature } from 'react-icons/fa';
import SignatureCanvas from './SignatureCanvas';
import { Input } from './ui/input';

const TRANSITION = {
    type: 'spring',
    bounce: 0.05,
    duration: 0.3,
};

export default function SignButton() {
    const uniqueId = useId();
    const formContainerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [note, setNote] = useState<null | string>(null);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setNote(null);
    };

    useClickOutside(formContainerRef, () => {
        closeMenu();
    });

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <MotionConfig transition={TRANSITION}>
            <div className='relative flex items-center mt-3'>
                <motion.button
                    key='button'
                    layoutId={`popover-${uniqueId}`}
                    className='flex h-9 items-center bg-zinc-900 text-white dark:bg-white dark:text-black px-2 font-semibold'
                    style={{
                        borderRadius: 8,
                    }}
                    onClick={openMenu}
                >
                    <motion.span
                        layoutId={`popover-label-${uniqueId}`}
                        className='text-sm flex items-center gap-2'
                    >
                        Sign My Guestbook<FaSignature size={24} />

                    </motion.span>
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={formContainerRef}
                            layoutId={`popover-${uniqueId}`}
                            className='absolute w-[364px] overflow-hidden bg-zinc-300 outline-none dark:bg-zinc-900 dark:text-white text-black'
                            style={{
                                borderRadius: 12,
                            }}
                        >
                            <form
                                className='flex h-full flex-col'
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log('Add Note');
                                }}
                            >
                                <motion.span
                                    layoutId={`popover-label-${uniqueId}`}
                                    aria-hidden='true'
                                    style={{
                                        opacity: note ? 0 : 1,
                                    }}
                                    className='absolute left-4 top-3 select-none text-sm text-zinc-500 dark:text-zinc-400'
                                >
                                    Your Message
                                </motion.span>
                                <textarea
                                    className='h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none'
                                    autoFocus
                                    onChange={(e) => setNote(e.target.value)}
                                />
                                <div className='px-4'>
                                    <h1>Sign here</h1>
                                    <SignatureCanvas />
                                    <Input type="email" placeholder="Email" className='mt-2 border border-zinc-900' />

                                </div>
                                <div key='close' className='flex justify-between px-4 py-3'>
                                    <button
                                        type='button'
                                        className='flex items-center'
                                        onClick={closeMenu}
                                        aria-label='Close popover'
                                    >
                                        <FaArrowLeft
                                            size={16}
                                            className='text-zinc-900 dark:text-zinc-100'
                                        />
                                    </button>
                                    <button
                                        className='relative ml-1 flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800'
                                        type='button'
                                        aria-label='Submit note'
                                        onClick={() => {
                                            console.log('Send feedback');
                                            closeMenu();
                                        }}
                                    >
                                        Submit Note
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </MotionConfig>
    );
}
