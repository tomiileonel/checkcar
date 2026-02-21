import React from "react";

// ─────────────────────────────────────────────
// FORM FIELD — Componente reutilizable de campo
// ─────────────────────────────────────────────

/**
 * FormRow: agrupa campos en una grilla responsive.
 */
export function FormRow({ children }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${React.Children.count(children)}, 1fr)`,
                gap: 12,
            }}
        >
            {children}
        </div>
    );
}

/**
 * FormField: envuelve un label accesible, el input hijo y un mensaje de error.
 * - htmlFor / id conectan el label con el control del formulario.
 */
export function FormField({ id, label, error, children }) {
    // Clona el hijo inyectándole el id si no lo tiene ya
    const childWithId = id
        ? React.cloneElement(React.Children.only(children), {
            id,
            "aria-describedby": error ? `${id}-error` : undefined,
            "aria-invalid": error ? true : undefined,
        })
        : children;

    return (
        <div>
            <label
                htmlFor={id}
                style={{
                    display: "block",
                    fontFamily: "var(--head)",
                    fontWeight: 600,
                    fontSize: 11,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: error ? "var(--red)" : "var(--text-muted)",
                    marginBottom: 6,
                }}
            >
                {label}
            </label>
            {childWithId}
            {error && (
                <div id={`${id}-error`} className="field-error">
                    {error}
                </div>
            )}
        </div>
    );
}
