<template>
    <div class="relative isolate overflow-hidden bg-accent py-20 text-primary-content">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div class="max-w-xl lg:max-w-lg">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                        Melde dich für unseren Verteiler an.
                    </h2>
                    <p class="mt-4 text-lg">
                        Wir informieren dich nur ein- bis zweimal im Jahr über den nächsten Workshop.
                    </p>
                </div>

                <div class="relative mt-6 max-w-md items-center gap-x-4 sm:flex">
                    <label for="email-address" class="sr-only">
                        Emailadresse
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        placeholder="Deine Email Adresse..."
                        autocomplete="email"
                        class="input w-full"
                        required
                    >
                    <btn-3d color="rajah" size="base" class="mt-6 sm:mt-0" @clicked="goToRegistration()">
                        Anmelden
                    </btn-3d>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const goToRegistration = () => {
    window.open('https://wetzlar.church.tools/publicgroup/667', '_blank').focus()
}
</script>
