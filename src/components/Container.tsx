import styles from "@/components/Container.module.css"

interface ContainerProps { children: React.ReactNode, classNames?: string }

export default function Container({ children, classNames="" }: ContainerProps) {
    return <div className={`${styles.container} ${classNames}`}>{children}</div>
}