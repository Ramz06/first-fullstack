import type React from "react";
import type { ReactNode } from "react";

type StatCardProps = {
    title: string;
    value: ReactNode
}

const StatCard: React.FC<StatCardProps> = ({title, value}) => {
    return (
        <article className="stat shadow">
            <header className="stat">
                <p className="stat-title">{title}</p>
                <p className="stat-value">{value}</p>
            </header>
        </article>
    )
}

export default StatCard;