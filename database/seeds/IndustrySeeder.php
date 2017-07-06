<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class IndustrySeeder extends Seeder
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
        DB::table('industries')->insert([
            'industry' => $faker->name,
            'description' => $faker->text,
        ]);
       }
    }
}
