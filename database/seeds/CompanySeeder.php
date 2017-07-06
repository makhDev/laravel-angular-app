<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = Faker::create();
     
      foreach (range(1,15) as $index) {
        DB::table('companies')->insert([
            'company' => $faker->name,
            'headquarters' => $faker->text,
            'industry_id' => $faker->numberBetween($min = 1, $max = 15),
        ]);
       }
    }
}
