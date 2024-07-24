@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.example.taxibookingapp"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        return new ApiInfo(
                "Taxi Booking API",
                "API documentation for Taxi Booking application",
                "1.0",
                "Terms of service",
                new Contact("Your Name", "www.example.com", "your-email@example.com"),
                "License of API",
                "API license URL",
                Collections.emptyList());
    }
}
