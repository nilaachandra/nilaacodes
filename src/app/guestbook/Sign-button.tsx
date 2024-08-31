'use client';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useRef, useState, useEffect, useId, startTransition, useTransition } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import { FaSignature } from 'react-icons/fa';
import SignatureCanvas from './SignatureCanvas';
import { Input } from '../../components/ui/input';
import { Button } from '@/components/ui/button';
import { fetchPosts, submitSignature, validateEmail } from './guestActions';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useSignatures } from './useSignatures';

const TRANSITION = {
    type: 'spring',
    bounce: 0.04,
    duration: 0.2,
};

export default function SignButton() {
    const uniqueId = useId();
    const router = useRouter()
    const { refetch } = useSignatures()
    const formContainerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [signature, setSignature] = useState<string>("")
    const [isValid, setIsValid] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(false);
    const [isPending, startTransition] = useTransition();

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setMessage("");
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

    //email validation handling
    const handleEmailValidation = async () => {
        startTransition(async () => {
            const result = await validateEmail(email);
            setIsValid(result);
            if (!result) {
                toast.error("Please add a valid email!");
            }
        });
    };

    //save signature
    const handleSaveSignature = (signatureData: string) => {
        setSignature(signatureData);
    };

    // sending the data to the backend
    const handleSubmit = async () => {
        try {
            setIsLoading(true); // Set loading state to true
            // Show a loading toast while the signature is being submitted
            const signatureInfo = {
                message,
                email,
                name,
                signature,
            };

            const result = await submitSignature(signatureInfo);

            // Dismiss the loading toast and show a success toast if the submission is successful
            setIsLoading(false); // Set loading state to false
            toast.dismiss();
            toast.success('Signature submitted successfully!');
            refetch()
            closeMenu();
        } catch (error) {
            // Clear the loading toast
            setIsLoading(false); // Set loading state to false
            toast.dismiss();
            // Show an error toast if something goes wrong
            toast.error('Failed to submit the signature. Please try again.');
        }
    };


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
                            className='absolute max-w-[712px] overflow-hidden z-50 bg-zinc-200 outline-none dark:bg-zinc-900 dark:text-white text-black'
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
                                        opacity: message ? 0 : 1,
                                    }}
                                    className='absolute left-4 top-2 select-none text-sm text-zinc-500 dark:text-zinc-400'
                                >
                                    Your Message
                                </motion.span>
                                <textarea
                                    className='h-full w-full resize-none rounded-md bg-transparent px-4 py-1 text-sm outline-none'
                                    autoFocus
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <div className='px-4'>
                                    <div className='w-full grid grid-cols-6 items-center gap-1 my-3'>
                                        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className='border col-span-4 dark:border-zinc-200 border-zinc-950' />
                                        <Button className='col-span-2' disabled={isValid || isPending} onClick={() => handleEmailValidation()}>{isPending ? <><AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />Verifying...</> : `${isValid ? "Verified" : 'Verify'}`}</Button>
                                    </div>
                                    <Input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} className='border col-span-4 dark:border-zinc-200 border-zinc-950  ' />

                                </div>
                                <div className='px-4 mt-2 dark:bg-zinc-900 bg-zinc-200'>
                                    <SignatureCanvas onSave={handleSaveSignature} />

                                </div>
                                <div key='close' className='flex justify-between px-4 py-3'>

                                    <Button
                                        className='w-full'
                                        type='button'
                                        disabled={isLoading || !signature || !isValid || !message || !name}
                                        onClick={() => {
                                            handleSubmit()
                                        }}
                                    >
                                        {isLoading ? <><AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />Signing</> : "Sign The Guestbook"}
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
