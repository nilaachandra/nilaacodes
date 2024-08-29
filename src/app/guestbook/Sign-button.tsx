'use client';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useRef, useState, useEffect, useId } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import { FaArrowLeft, FaSignature } from 'react-icons/fa';
import SignatureCanvas from './SignatureCanvas';
import { Input } from '../../components/ui/input';
import { Button } from '@/components/ui/button';

const TRANSITION = {
    type: 'spring',
    bounce: 0.04,
    duration: 0.2,
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
            <div className='relative flex items-center mt-4'>
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
                            className='absolute max-w-[712px] overflow-hidden bg-zinc-300 outline-none dark:bg-zinc-800 dark:text-white text-black'
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
                                    <div className='w-full grid grid-cols-6 items-center gap-1 my-3'>
                                        <Input type="email" placeholder="Email" className='border col-span-4 dark:border-zinc-300 border-zinc-950  ' />
                                        <Button className='col-span-2'>Verify</Button>
                                    </div>
                                    <Input type="text" placeholder="Your Name" className='border col-span-4 dark:border-zinc-300 border-zinc-950  ' />

                                </div>
                                <div className='px-4 mt-2'>
                                    <SignatureCanvas />

                                </div>
                                <div key='close' className='flex justify-between px-4 py-3'>

                                    <Button
                                        className='w-full'
                                        type='button'
                                        aria-label='Submit note'
                                        onClick={() => {
                                            console.log('Send feedback');
                                            closeMenu();
                                        }}
                                    >
                                        Sign
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </MotionConfig>
    );
}
