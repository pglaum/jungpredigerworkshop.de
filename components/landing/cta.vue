<template>
    <div class="relative isolate overflow-hidden bg-secondary py-20 text-neutral">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-x-20">
                <div class="my-auto text-center lg:mx-0 lg:flex-auto lg:text-left">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                        Melde dich für den Workshop an.
                    </h2>

                    <p class="mt-6 text-lg leading-8">
                        Richtwert für einen Spendenbeitrag: 40€ (Mahlzeiten inkl.)
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <btn-3d @clicked="goToRegistration()">
                            Anmelden
                            <icon name="material-symbols:arrow-right-alt" />
                        </btn-3d>
                    </div>
                </div>
                <div class="mx-auto mt-20 grow px-6 lg:mt-0">
                    <dl
                        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10"
                    >
                        <bullet
                            v-for="bullet in bullets"
                            :key="bullet.name"
                            :icon="bullet.icon"
                            :name="bullet.name"
                            :description="bullet.description"
                            color="hippie-blue"
                        />
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const bullets = [
    {
        name: 'Ort',
        description: 'Immanuel-Gemeinde Wetzlar, Elisabethenstraße 23, 35576 Wetzlar',
        icon: 'streamline:travel-map-location-pin-navigation-map-maps-pin-gps-location',
    },
    {
        name: 'Übernachtung',
        description: 'Es kann im Gemeindehaus übernachtet werden (Dusche vorhanden)',
        icon: 'ph:bed',
    },
    {
        name: 'Datum',
        description: '26.10. (ab 16 Uhr) - 28.10.2021 (ca. 14 Uhr)',
        icon: 'streamline:interface-calendar-date-month-thirty-thirty-calendar-date-week-day-month',
    },
    {
        name: 'Anmeldeschluss',
        description: '30. September 2023',
        icon: 'streamline:interface-alert-warning-triangle-frame-alert-warning-triangle-exclamation-caution',
    },
]

const goToRegistration = () => {
    window.open('https://wetzlar.church.tools/publicgroup/667', '_blank').focus()
}

</script>
