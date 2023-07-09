<template>
    <div class="relative isolate overflow-hidden bg-accent py-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div class="max-w-xl lg:max-w-lg">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                        Melde dich für unseren Verteiler an.
                    </h2>
                    <div class="mt-6 flex max-w-md gap-x-4">
                        <label for="email-address" class="sr-only">
                            Emailadresse
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            placeholder="Gib deine Email Adresse ein"
                            autocomplete="email"
                            class="input w-full"
                            required
                        >
                        <button type="submit" class="btn-secondary btn">
                            Anmelden
                        </button>
                    </div>
                </div>
                <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div class="flex flex-col items-start">
                        <div
                            class="flex
                             h-10
                             w-10
                             items-center
                             justify-center
                             rounded-md
                             bg-base-content/5
                             p-2
                             ring-1
                             ring-base-content/10"
                        >
                            <icon name="streamline:interface-calendar-mark-calendar-date-day-month-mark" />
                        </div>
                        <dt class="mt-4 font-semibold">
                            Jährliche Konferenzen
                        </dt>
                        <dd class="mt-2 leading-7">
                            Wir informieren dich ein- bis zweimal im Jahr über unsere nächsten Konferenzen.
                        </dd>
                    </div>
                    <div class="flex flex-col items-start">
                        <div
                            class="flex
                             h-10
                             w-10
                             items-center
                             justify-center
                             rounded-md
                             bg-base-content/5
                             p-2
                             ring-1
                             ring-base-content/10"
                        >
                            <icon name="ph:hand-light" />
                        </div>
                        <dt class="mt-4 font-semibold">
                            Kein Spam
                        </dt>
                        <dd class="mt-2 leading-7">
                            Ansonsten schicken wir dir keine Emails!
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>
